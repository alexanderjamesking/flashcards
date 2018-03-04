(ns flashcards.config
  (:require [environ.core :refer [env]]))

(def port (Integer/parseInt (env :port)))
