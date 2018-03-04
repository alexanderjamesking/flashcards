(ns flashcards.game
  (:require [clojure.set :refer [map-invert]]))

#_(def cards {"интересоваться" "To be interested in"
              "волноваться" "To be worried"
              "Мыться" "To wash"
              "Гордиться" "To be proud"
              "учиться" "To study"
              "стараться" "To try"
              "Готовиться" "To prepare"
              "Улыбаться" "To smile"
              "заниматься" "To be engaged in"
              "смеяться" "To laugh"
              "бояться" "To be afraid"
              "Бриться" "To shave"
              "Одеваться" "To dress"
              "Раздеваться" "To undress"
              "Надеяться" "To hope"})

;; pick a random word from the list and it's answer
;; pick 4 random answers from the list
;; build map with word, possible answers, correct answer

(defn take-n-random-cards [cards n]
  (->> cards
       seq
       shuffle
       cycle
       (take n)))

(defn generate-answers [cards [question answer] n]
  (let [wrong-answers (->> (dissoc cards question)
                           vals
                           shuffle
                           (take n))]
    (shuffle (conj wrong-answers answer))))

(defn generate-question [cards n-possible-answers card]
  (let [[question answer] card
        answers (generate-answers cards card (dec n-possible-answers))]
    {:question question
     :possible-answers answers
     :correct-answer answer}))

(defn generate-n-questions [cards n n-possible-answers]
  (->> (take-n-random-cards cards n)
       (map (partial generate-question cards n-possible-answers))))


(defn generate-shuffled-questions [cards n-questions n-possible-answers]
  (-> (generate-n-questions cards n-questions n-possible-answers)
      (concat (generate-n-questions (map-invert cards) n-questions n-possible-answers))
      shuffle))
