(ns flashcards.main
  "Entrypoint for production Uberjar"
  (:gen-class)
  (:require [integrant.core :as ig]
            [flashcards.system :refer :all]))

(def config {:web-server {:port 3000}})

(defn -main [& args]
  (let [system (ig/init config)]
    @(promise)))
