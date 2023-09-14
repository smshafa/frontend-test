FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y \
        nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /src
COPY ["frontend-test.csproj", "./"]
RUN dotnet restore "frontend-test.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "frontend-test.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "frontend-test.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "frontend-test.dll"]
