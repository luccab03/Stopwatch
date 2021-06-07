import React, {Component} from "react";
import {Button, ScrollView, Text, TouchableOpacity, View} from "react-native";

import {Clock} from "../styles";


//Declarando variáveis globais
let interval: NodeJS.Timeout;
let lista: Item[] = [];
let id = 1;

interface Item {
    id: number;
    tempo: number;
}

interface IState {
    tempo: number;
    active: boolean;
    pause: boolean;
}


export default class Stopwatch extends Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            //Declarando as variaveis de estado
            tempo: 0.0,
            active: false,
            pause: false,
        }
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.pause = this.pause.bind(this);
    }

    state:IState = {
        tempo: 0.0,
        active: false,
        pause: false,
    }

    //Método de "começar"
    start() {
        this.setState({active: true});
        this.setState({pause: false});
        interval = setInterval(() => {
            let time = this.state.tempo
            this.setState({tempo: time += 0.1})
        }, 100);
    }

    //Método de "parar e zerar"
    stop() {
        if (this.state.tempo > 0) {
            this.setState({active: false});
            clearInterval(interval);
            lista.push({"id": id, "tempo": this.state.tempo});
            id++;
            this.setState({tempo: 0.0});
        }
    }

    //Método de "pausar"
    pause() {
        this.setState({pause: true});
        clearInterval(interval);
    }


    render() {
        let button1;

        //Se o cronometro não está ativo, mostrar o botão Começar
        if (!this.state.active) {
            button1 = <Button title={"Comecar"} onPress={this.start}/>
        }


        //Se o cronometro está ativo
        if (this.state.active) {
            //e está pausado
            if (this.state.pause) {
                //Botão Começar/Recomeçar
                button1 = <Button title={"Recomeçar"} onPress={this.start}></Button>
            } else { //ou não esta pausado
                //Botão pausar
                button1 = <Button title={"Pausar"} onPress={this.pause}></Button>
            }
        }

        return (
            <View style={Clock.container}>
                <View style={Clock.tempoView}>
                    <Text style={Clock.tempo}>{this.state.tempo.toFixed(1)}s</Text>
                </View>

                <View style={Clock.buttons}>
                    {/*Botões variáveis*/}
                    {button1}
                    <Button title={"Stop"} onPress={this.stop}/>
                </View>

                <View style={Clock.list}>
                    <Text style={Clock.texto}>Número</Text>
                    <Text style={Clock.texto}>Tempo</Text>
                </View>

                <ScrollView>
                    {/*Array de Itens*/}
                    {lista.map((item) => (
                        <View style={Clock.list}>
                            <Text style={Clock.texto} >{item.id}</Text>
                            <Text style={Clock.texto} >{item.tempo.toFixed(1)}s</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

