module Main exposing (CurrentFreq, FreqChange, Model, Msg(..), RecurringFreq, init, input, main, recurFreq, tryToInt, update, view)

import Browser
import Html exposing (Html, div, h1, img, p, text)
import Html.Attributes exposing (src)
import Set exposing (..)



---- MODEL ----


type alias Model =
    Int


type alias CurrentFreq =
    Int


type alias RecurringFreq =
    Int


type alias FreqChange =
    Int


init : ( Model, Cmd Msg )
init =
    let
        items =
            String.lines input

        int_items =
            List.map tryToInt items

        recurring =
            recurFreq 0 int_items
    in
    ( recurring, Cmd.none )


tryToInt : String -> Int
tryToInt s =
    case String.toInt s of
        Just aNumber ->
            aNumber

        Nothing ->
            0


recurFreq : CurrentFreq -> List FreqChange -> RecurringFreq
recurFreq curr freqs =
    recurFreqHelper curr freqs freqs (Set.insert 0 Set.empty)


recurFreqHelper : CurrentFreq -> List FreqChange -> List FreqChange -> Set Int -> RecurringFreq
recurFreqHelper curr freqs fullList setOfFreqs =
    let
        changeValMaybe =
            if List.isEmpty freqs then
                List.head fullList

            else
                List.head freqs

        changeVal =
            case changeValMaybe of
                Just a ->
                    a

                Nothing ->
                    0

        newTail =
            if List.isEmpty freqs then
                case List.tail fullList of
                    Just aTail ->
                        aTail

                    Nothing ->
                        []

            else
                case List.tail freqs of
                    Just tail ->
                        tail

                    Nothing ->
                        []

        newCurrent =
            curr + changeVal

        newSet =
            if Set.member newCurrent setOfFreqs then
                Set.empty

            else
                Set.insert newCurrent setOfFreqs
    in
    if Set.member newCurrent setOfFreqs then
        newCurrent

    else
        recurFreqHelper newCurrent newTail fullList newSet



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
        , p [] [ text ("Answer is " ++ String.fromInt model) ]
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
    """+16
-2
-5
+1
-12
-1
-8
+12
+5
-18
-12
-11
-1
+2
-8
-6
-1
-17
-18
+16
-4
+18
+7
-4
+13
+11
-5
+11
-8
+15
+8
-16
+15
+10
-19
-17
+5
-13
+10
+14
+16
+8
+14
-8
+19
-17
+14
+12
+8
+9
-11
+1
+2
-16
+19
+13
-5
+6
-10
-6
+4
-15
+20
+18
-14
+15
+3
+4
-3
-9
+1
+18
+8
+2
-11
+19
-3
-10
+14
+12
+6
-17
-14
-10
-18
+19
+4
+12
-18
-4
-8
-4
-20
-16
-1
-18
+2
-17
-17
+7
-12
-3
+4
+9
+6
+9
+6
+1
-17
+13
+14
-2
+8
+9
-12
+13
-5
-15
+21
+5
+18
-8
-9
+11
+14
+17
+4
-18
+23
+20
-14
+5
-12
+2
+25
+16
-10
-14
+17
-4
-1
-5
+19
+1
+17
+3
-9
+5
+8
-10
+14
+17
-15
+19
+1
-19
+8
+15
-12
+19
-15
+7
+2
-11
-18
+11
+1
+9
+18
+5
+8
-6
-16
-15
-9
+8
-6
-1
-18
-3
-16
+10
-2
-13
+17
+15
-2
-8
-11
-9
-1
+2
+13
+22
-19
+9
+8
-9
-20
+5
-8
-13
-5
+11
+17
+4
+13
+14
+15
+6
+10
-8
+7
+9
+15
+17
+15
+5
+4
+17
-16
-6
+7
+2
+18
+19
-3
-4
-11
+1
-15
+17
-14
+17
+13
-6
-8
+16
+12
+14
-3
-15
-19
-6
-9
-12
-18
+4
-7
+14
-10
-12
+2
+19
+12
-5
+6
+21
-2
-14
+21
-16
+4
+10
+10
+12
+7
+16
-1
+16
+5
+19
+14
+8
+14
-1
-1
-10
-13
-1
-3
+8
+14
-9
+8
+10
-7
+19
-13
+6
+8
+1
+11
-17
+10
+16
+1
-13
+16
+3
+4
-14
+16
+17
-14
+16
+15
+16
+19
-15
+12
+4
-21
+14
-12
-16
-12
-3
+11
-3
+4
-11
+3
+6
+15
-16
-16
-17
-17
+16
-10
+4
+10
-18
+11
-16
-16
-3
-12
+11
-20
+6
-11
-4
-10
-13
-19
+4
-11
-6
+18
-9
+12
+7
+10
-2
-3
+13
-5
-2
-2
-14
+7
-16
-4
-2
-6
+9
+5
-18
-15
+2
+8
-21
+20
-18
-10
+9
+17
-12
-8
-15
+31
-7
-4
-12
-25
-20
-16
-6
+18
+18
-1
+8
+5
-7
-30
-13
-10
-15
-12
-6
+10
+16
-5
-17
-14
+15
+10
+14
-2
+10
+4
+3
-19
+9
+2
-17
+9
-6
+1
+7
+9
+7
-4
+5
+6
+17
-4
-18
+7
-20
-11
-13
-9
-8
+46
-2
+22
+16
-22
-38
-3
+18
+28
+33
+24
+17
+11
-13
-5
+19
-9
+10
+15
+22
+8
+6
-13
-9
-4
-2
+20
-11
-28
+14
+16
+13
+5
+12
+7
+15
+19
-6
+14
+15
-14
+18
+17
+4
-10
+2
-10
-14
+3
-7
+22
-2
+1
+4
-6
-3
+14
+23
-6
-7
-16
-1
+6
+21
+17
+4
-17
+8
-4
+21
-18
-5
+4
+13
+24
+17
+13
+20
+18
+17
+9
+9
+3
+20
+17
-7
+10
+22
-27
+4
-15
+5
-4
-24
+4
-20
-35
+1
-5
+17
-20
+4
+19
+23
-6
+62
+59
-8
-10
+90
+99
-18
-18
+34
-6
+28
-2
+27
-5
+4
+9
+9
-3
+21
+4
-15
+14
-15
+22
-15
-20
+30
+9
-1
+107
-7
-8
-8
+28
+12
-5
-114
+3
+72
-14
-68
-42
+684
+82290
-12
-19
-3
+6
+4
+3
+16
+6
-15
+18
+3
+13
+10
-4
+10
-17
-7
-18
+2
+18
+13
+13
+6
+8
+18
+11
-13
+8
-7
+11
+4
+5
+7
-2
-16
-19
+14
+19
-6
+11
+8
+12
+7
+11
+5
-18
-4
+1
-7
+17
-8
-8
-5
-10
-16
+3
+15
-17
-9
+14
-9
-12
-4
-15
+7
+3
+17
-3
-19
+3
+6
-2
-17
+18
+4
-8
-8
-12
+10
-18
-20
-5
+15
-13
+20
+4
+9
+1
-7
-6
-5
+10
-9
-2
-21
+14
+21
+11
+4
-14
-5
-16
+1
-15
-10
+5
-1
+13
-11
-16
-16
-15
+13
-2
+5
-14
+4
-8
-3
+10
+5
-3
-16
+5
+16
-20
+11
+16
+6
-2
+6
+3
+21
-15
+1
-9
-2
+12
-3
-19
-9
-16
+11
+4
+18
+9
+26
-28
-12
-22
-18
+4
-7
-2
-5
-16
-19
-14
-3
-5
+14
+17
-4
+7
+4
-9
+14
+3
-11
+15
+10
+13
-10
-15
+18
-13
+1
+2
+3
+6
+10
+1
-18
-9
+3
-22
-13
-16
-15
+3
+6
+1
-12
+3
-17
-1
-16
+4
+9
+8
-18
-15
-18
-8
-13
+2
+15
+8
+3
-16
+2
-16
-12
-5
-3
-12
+19
+14
+20
-12
-11
+9
-10
-6
-10
+14
-17
+12
-14
+16
-6
+8
-10
-17
+4
-6
-1
-18
+2
+4
+9
-5
-13
-7
-16
-14
-8
-10
-4
-19
-19
+20
-4
+13
+19
+9
-17
-4
+11
+18
-1
-3
-16
-14
-17
-11
-6
+14
+6
-7
+5
-7
+14
+6
-3
-19
-17
-15
-12
+4
+5
+7
+5
+1
-8
+3
-11
-13
+4
-17
+15
+3
-11
-17
-4
-7
-1
-5
-7
+3
+5
+15
+21
+4
+17
+2
+12
-1
-1
+5
+17
-8
-3
-2
+7
-13
-19
-2
+3
-16
+11
+7
-14
+19
+3
+11
+14
-12
+2
-14
-18
+1
-27
+13
+3
+8
-14
-40
-1
-10
-4
+8
-31
-10
-3
+20
+6
-64
+7
+21
+52
+16
+32
-7
-3
+2
-91
+24
-94
+35
-117
+18
-19
+8
-12
+19
-12
+8
-24
-19
+14
-24
+7
-11
-19
-2
-16
-2
-6
+10
-12
+1
+5
-20
+10
-15
-3
+7
+12
+8
+11
+13
-11
-11
+13
+20
-18
+9
-16
+18
-10
+20
-13
+15
-18
+8
+14
+18
+4
-6
+16
-2
+9
-2
+33
+4
+6
+19
-11
+14
-13
+4
-2
-4
-21
-10
-82696"""
