FROM openjdk:8-jre-slim

ADD target/flashcards-0.1.0-SNAPSHOT-standalone.jar flashcards.jar

EXPOSE 3000

CMD java -Dport=3000 -jar flashcards.jar
