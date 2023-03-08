# Dev stage
FROM eclipse-temurin:17-jdk-alpine AS dev

# setup workdir (next commands will run under this context, but also the running container will inherit this - if not overriden at runtime)
WORKDIR /app

# Needed for VS Code Remote Development
RUN apk add musl libgcc libstdc++ git curl wget bash ca-certificates gcompat openssh-client

# Build App
# - copy the maven dependencies files (optimise image build - copy only these files and run install, if these change rarely we can reuse this image layer too)
COPY pom.xml mvnw ./
COPY .mvn ./.mvn

# - install depdendencies  (optimise image build - run just install after copying package.json, we hope these will change rarer as the code, so we can reuse this image layer too)
RUN ./mvnw dependency:resolve

# - copy the rest of the code (except the ones in .dockerignore) (optimise image build - we expect these to change everytime, so keep this as late as possible)
COPY . .

CMD ["./mvnw", "spring-boot:run"]


# Build stage
FROM dev AS builder

# build the .jar file
RUN ./mvnw clean package -Dmaven.test.skip


# Prod stage
FROM eclipse-temurin:19-jdk-alpine AS prod

WORKDIR /app

COPY --from=builder /app/target/springboot-rest-api-*.jar /app/springboot-rest-api.jar

CMD ["java", "-jar", "/app/springboot-rest-api.jar"]
