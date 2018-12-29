module Main exposing (Model, Msg(..), StringStatus, init, input, main, update, view)

import Browser
import Html exposing (Html, div, h1, img, p, text)
import Html.Attributes exposing (src)
import List.Extra exposing (..)
import Queue exposing (..)



---- MODEL ----


type alias Model =
    String


type alias StringStatus =
    { current : List Char
    , hadChanges : Bool
    }


init : ( Model, Cmd Msg )
init =
    let
        inputQ =
            input
                |> String.toList
                |> Queue.fromList

        resultList =
            reduceCode inputQ Queue.empty

        result =
            String.fromList resultList
    in
    ( result, Cmd.none )


reduceCode : Queue Char -> Queue Char -> List Char
reduceCode q currQ =
    if Queue.size q < 2 then
        Queue.toList q

    else
        let
            item1 =
                Queue.dequeue q

            a =
                case Tuple.first item1 of
                    Just aChar ->
                        aChar

                    Nothing ->
                        '$'

            item2 =
                item1
                    |> Tuple.second
                    |> Queue.dequeue

            b =
                case Tuple.first item2 of
                    Just bChar ->
                        bChar

                    Nothing ->
                        '$'

            newQ =
                Tuple.second item2

            newCurrQ =
                reduceCodeHelper a b newQ currQ
        in
        if Queue.size currQ == Queue.size newCurrQ then
            Queue.toList newCurrQ

        else
            reduceCode newCurrQ newCurrQ


reduceCodeHelper : Char -> Char -> Queue Char -> Queue Char -> Queue Char
reduceCodeHelper a b q currQ =
    case Queue.size q of
        0 ->
            currQ

        1 ->
            let
                qItem =
                    q
                        |> Queue.dequeue
                        |> Tuple.first
            in
            case qItem of
                Just aQItem ->
                    Queue.enqueue aQItem currQ

                option2 ->
                    currQ

        _ ->
            let
                mayB =
                    charToAdd a b

                newQ =
                    case mayB of
                        Just aChar ->
                            Queue.enqueue aChar currQ

                        Nothing ->
                            currQ

                item1 =
                    Queue.dequeue q

                item2 =
                    Queue.dequeue (Tuple.second item1)
            in
            case mayB of
                Just aB ->
                    -- pull one item off queue and make B the new A
                    let
                        newA =
                            b

                        newB =
                            case Tuple.first item1 of
                                Just aA ->
                                    aA

                                Nothing ->
                                    '$'
                    in
                    reduceCodeHelper newA newB (Tuple.second item1) newQ

                Nothing ->
                    -- pull two items off queue
                    let
                        newA1 =
                            case Tuple.first item1 of
                                Just aA1 ->
                                    aA1

                                Nothing ->
                                    '$'

                        newB1 =
                            case Tuple.first item2 of
                                Just aB1 ->
                                    aB1

                                Nothing ->
                                    '$'
                    in
                    reduceCodeHelper newA1 newB1 (Tuple.second item2) newQ



-- reduceCode : List Char -> List Char
-- reduceCode code =
--     let
--         reducedList =
--             reduceCodeHelper 0 code []
--     in
--     if List.length reducedList < List.length code then
--         reduceCode reducedList
--     else
--         reducedList
-- reduceCodeHelper : Int -> List Char -> List Char -> List Char
-- reduceCodeHelper idx code currlist =
--     if idx >= (List.length code) then
--         currlist
--     else
--         let
--             a =
--                 case List.Extra.getAt idx code of
--                     Just aA ->
--                         aA
--                     Nothing ->
--                         '$'
--             b =
--                 case List.Extra.getAt (idx + 1) code of
--                     Just aB ->
--                         aB
--                     Nothing ->
--                         '$'
--             newCurrlist =
--                 case charToAdd a b of
--                     Just aChar ->
--                         currlist ++ [ aChar ]
--                     Nothing ->
--                         currlist
--             newidx =
--                 if doCharsReact a b then
--                     idx + 2
--                 else
--                     idx + 1
--         in
--         reduceCodeHelper newidx code newCurrlist


charToAdd : Char -> Char -> Maybe Char
charToAdd a b =
    if doCharsReact a b then
        Nothing

    else
        Just a


doCharsReact : Char -> Char -> Bool
doCharsReact a b =
    abs (Char.toCode a - Char.toCode b) == 32



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div []
        [ img [ src "/logo.svg" ] []
        , h1 [] [ text "Your Elm App is working!" ]
        , p [] [ text ("Final string length is :: " ++ String.fromInt (String.length model)) ]
        ]



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }


input : String
input =
    "dabAcCaCBAcCcaDA"
