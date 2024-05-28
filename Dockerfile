FROM eclipse-temurin:21
RUN mkdir /target/asn1-0.01-SNAPSHOT.jar
COPY asn1.jar /target/asn1-0.01-SNAPSHOT.jar
CMD ["java", "-jar", "/target/asn1-0.01-SNAPSHOT.jar/asn1.jar"]
