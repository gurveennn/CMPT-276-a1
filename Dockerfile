FROM maven:3.8.6-eclipse-temurin-22 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:22-jdk
COPY --from=build /target/ans1-0.0.1-SNAPSHOT.jar asn1.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]
