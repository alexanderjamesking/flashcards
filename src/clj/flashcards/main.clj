(ns flashcards.main
  "Entrypoint for production Uberjar"
  (:gen-class)
  (:require [integrant.core :as ig]
            [flashcards.system :refer :all]
            [environ.core :refer [env]]))

(def port (if-let [p (env :port)]
            (Integer/parseInt p)
            3000))

(def config {:web-server {:port port
                          :app-js "/public/cljs/main.min.js"}})

(defn -main [& args]
  (let [system (ig/init config)]
    @(promise)))
