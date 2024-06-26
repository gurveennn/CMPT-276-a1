FROM maven:3.8.4-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21
COPY --from=build /target/asn1-0.0.1-SNAPSHOT.jar /opt/app/asn1.jar
CMD ["java", "-jar", "/opt/app/asn1.jar"]