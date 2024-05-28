FROM eclipse-temurin:21
RUN mkdir /opt/app
COPY asn1.jar /opt/app
CMD ["java", "-jar", "/opt/app/ASN1.jar"]