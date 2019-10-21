import { MyColors, Width } from '..';
import { View, Text, TouchableOpacity, ActivityIndicator,TextInput } from 'react-native';
import React, { Component } from 'react'
export default class MainComponent extends Component {
    state={
        inputText:'',
        textSaving:false
    }
    onInputTextChange=(text)=>{
        this.setState({inputText:text,
            textSaving:false
        })
    }
    
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state
        let headerTitle = 'Main',
            headerTitleStyle = { color: 'darkviolet' },
            headerBackTitle='Back',
            headerBackTitleStyle={color:'green',margin:100}
            headerStyle = { backgroundColor: 'green' },
            headerRight = (<TouchableOpacity style={{
                justifyContent: 'center', alignItems: 'center', marginRight: Width * .03,
                color: 'white', backgroundColor: 'darkviolet',
                width: Width * .2, height: Width * .1, borderRadius: Width * .02
            }}
                onPress={() => {
                    params.onSave()
                }}
            >
                <Text style={{ color: 'white' }}>
                    Save
                    </Text>
            </TouchableOpacity>)
        return { headerTitle, headerTitleStyle, headerStyle, headerRight,headerBackTitle,headerBackTitleStyle }
    };
    onsave = () => {
        const { setParams } = this.props.navigation
        // const { params } = this.props.navigation.state
        this.setState({textSaving:true})
        setParams({isSaving:true})
        setInterval(() => {
            setParams({ isSaving: false })
        }, 1000);
    }
    componentDidMount() {
        const { setParams } = this.props.navigation
        setParams({ onSave: this.onsave, isSaving: false })
    }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        let dataSendToDetail = {
            name: 'Star War',
            releasedYear: 1994
        }
        let mainView = (params&&params.isSaving) ? <ActivityIndicator /> : <View style={{
            flex: 1, justifyContent: 'space-around',
            alignItems: 'center', backgroundColor: MyColors.greenColor1
        }} >
            <View style={{}}>
            <Text style={{
                fontWeight: 'bold', fontSize: Width * .07,
                textAlign: 'center', color: 'white'
            }}>type your name: </Text>
            <Text style={{width:Width*.6,
                fontWeight: 'bold', fontSize: Width * .07,
                textAlign: 'center', color: 'white'
            }}>{this.state.textSaving? this.state.inputText:null}</Text>
            </View>
            <TextInput 
            autoFocus
            underlineColorAndroid={MyColors.greenColor1}
            onChangeText={this.onInputTextChange}
            selectionColor={'white'}
            maxLength={15}
            style={{
                
                 fontSize: Width * .05,height:Width*.11,
                textAlign: 'center', color: 'white',
                borderColor:'white',borderWidth:Width*.006,width:Width*.6,
                
                
            }}>

            </TextInput>
            
            <TouchableOpacity style={{
                width: Width * .6, height: Width * .1,
                justifyContent: 'center', alignItems: 'center', borderColor: 'gray',
                borderRadius: Width * .01, backgroundColor: 'darkviolet'
            }}
                onPress={() => {
                    navigate('DetailScreen', dataSendToDetail)
                }}
            >
                <Text style={{
                    fontWeight: 'bold', fontSize: Width * .05,
                    textAlign: 'center', color: 'white'
                }}>navigate to DetailScreen</Text>
            </TouchableOpacity>

        </View>
        return (
             mainView 
        )
    }
}
