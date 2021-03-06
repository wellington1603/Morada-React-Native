import  React from 'react';
import { StatusBar, Image, Animated, Text, View, Dimensions, StyleSheet, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import faker from 'faker'

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize(['women', 'men'])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});

const dados = [
    {
        id: Math.random(),
        nome: "Rosana",
        descricao: "Ofereço serviços de troca de chuveiro e pequenos reparos elétricos",
        bairro: "Vaz Lobo",
        categoria: "oferecendo"

    },
    {
        id: Math.random(),
        nome: "Lucas",
        descricao: "Pedreiro para alvenaria.",
        bairro: "Terreirão",
        categoria: "solicitando"

    },
    {
        id: Math.random(),
        nome: "Matheus",
        descricao: "Posso nessa semana ajudar em pequenos reparos na região de bento ribeiro.",
        bairro: "Bento Ribeiro",
        categoria: "oferecendo"

    },
    {
        id: Math.random(),
        nome: "Roberto",
        descricao: "Ajudo com penas alvenarias em bloco de concreto.",
        bairro: "Nova aurora",
        categoria: "oferecendo"

    },
    {
        id: Math.random(),
        nome: "Brayan",
        descricao: "Pintura de casa",
        bairro: "Lote XV",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "João",
        descricao: "Tenho uma caixa de ferramentas para doar",
        bairro: "Jacarepaguá",
        categoria: "oferecendo"

    },
    {
        id: Math.random(),
        nome: "Wellington",
        descricao: "Peço ajuda para consertar meu telhado",
        bairro: "Irajá",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Milene",
        descricao: "Preciso cimento para terminar de consertar a calçada",
        bairro: "Pavuna",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Rodrigo",
        descricao: "Pintura",
        bairro: "Niterói",
        categoria: "oferecendo"

    },
    {
        id: Math.random(),
        nome: "Marcos",
        descricao: "Preciso de ajuda para executar 2 metros de alvenaria.",
        bairro: "Nova aurora",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Lucas",
        descricao: "Mão de obra pintura",
        bairro: "Terreirão",
        categoria: "Oferecendo"

    },
    {
        id: Math.random(),
        nome: "Fernanda",
        descricao: "Eletricista para instalação de tomadas.",
        bairro: "Caxias",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Maria Clara",
        descricao: "Preciso de um carrinho de mão para tirar areia aqui da frente de casa",
        bairro: "Santa Teresa",
        categoria: "Solicitando"

    },
    {
        id: Math.random(),
        nome: "Matheus",
        descricao: "Posso nessa semana ajudar em pequenos reparos na região de bento ribeiro.",
        bairro: "Bento Ribeiro",
        categoria: "oferecendo"

    },
]

const BG_IMG = 'https://images-ext-2.discordapp.net/external/KDI34rqMPdkobzhlvjm25_YkpxcS38BMTn7k7UJ9uBU/https/i.pinimg.com/originals/4d/e0/c7/4de0c7654c3877c6cfada14fa2d7104f.jpg?width=169&height=300'

const SPACING = 20;
const AVATAR_SIZE = 70;

export default () => {
 

    return <View style={{flex: 1, backgroundColor: '#fff'}}>

        <Image
            source={{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={13}
        />

        
        <FlatList
        data={dados}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: SPACING, paddingTop: StatusBar.currentHeight || 42}}
        renderItem={({item, index}) => {



            return <View style={{
                        flextDirection: 'row',
                         padding: SPACING,
                         marginBottom: SPACING,
                         backgroundColor: 'rgba(255,255,255,0.8)',
                         borderRadius: 12,
                         shadowColor: "#000",
                         shadowOffset:{width: 0, height: 10},
                         shadowOpacity: .3,
                         shadowRadius: 20,
                       
                    }}>

                <View>
                    <Text style={{fontSize:22, fontWeight: '700'}}> {item.nome}</Text>
                    <Text style={{fontSize:18, opacity: .7}}> {item.descricao} </Text>
                    <Text style={{fontSize:18, opacity: .7, fontWeight: '700'}}> {item.bairro} </Text>
                    <Text style={{fontSize:22, opacity: .8, color: '#0099cc'}}> {item.categoria}</Text>
                </View>
            </View>
        }}
    />


    </View>
}