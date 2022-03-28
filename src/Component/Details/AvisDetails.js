import React,{useState,useEffect} from 'react';
import { useHeaderHeight } from '@react-navigation/elements';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TextInput,
   TouchableOpacity,
   Touchable,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard,
 } from 'react-native';
 import styled from 'styled-components';
import data from "../../Data/restaurant.json"
import DatePicker from 'react-native-date-picker'
import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage from "react-native-flash-message";

const AvisDetails =  () => {     
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [nom, setNom] = useState('');
    const [dates,setDates] = useState('')
    const [commentaire, setCommentaire] = useState('');
    const [list, setList] = useState([]);
    const headerHeight = useHeaderHeight();
    const currentDate = ('0' + date.getDate()).slice(-2) +"/"+ ('0'+ (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
    const [form,setForm] = useState(false)
    const showForm = () => {
        setForm(!form);
    }
    const handleAddAvis = () =>{
        if(nom === '' && commentaire === ''){
            alert("Entrez une valeur")
          }
          else{
        console.log(nom,commentaire)
          setList([...list,{Nom:nom,Commentaire : commentaire,Date:currentDate}]);
          showMessage({ message: "Votre Avis à été Ajouté !", type: "success",titleStyle:{fontSize:18,textAlign:"center"},floating:"true",backgroundColor: "#3B3B90"});
          setNom(null);
          setCommentaire(null);
          setDates(null);
          setForm(false);
          }
    }
    return(
<AproposView>
<KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
  >
<Avis>Avis</Avis>
<AvisButton onPress={() => showForm()}><AvisButtonText>Ecrire un avis</AvisButtonText></AvisButton>
{form && (
<SafeAreaView>
<Input 
placeholder="Votre Nom Prénom"
value={nom} 
onChangeText={setNom} 
/>
<TouchableOpacity onPress={() => setOpen(true)}>
<Input 
disable="true" 
pointerEvents="none" 
value={currentDate}
/>
</TouchableOpacity>
<MessageInput 
 placeholder="Votre Avis"
 multiline={true}
 value={commentaire} 
 onChangeText={setCommentaire} 
 numberOfLines={4}
/>
<SubmitButton onPress={() => handleAddAvis()}><AvisButtonText>Valider</AvisButtonText></SubmitButton>
<DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        locale='fr'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
       </SafeAreaView>
    )}
 <Line/>
 <CommentView>
<ImageView>
<Images source={{uri:"https://www.1jour1actu.com/wp-content/uploads/2021/10/VIDEO_histoire_tour_Eiffel.jpeg"}}/>
<ImagesText>Sala</ImagesText>
</ImageView>
<CommentTextView>
<CommentText>Très bon restaurant, Hôtel du Jamais vu je donne 5/5</CommentText>
<CommentDate>22/03/2022</CommentDate>
</CommentTextView>
<Line />
</CommentView>

 {list.map((item) => 
<CommentView key={item.id}>
<ImageView>
<Images source={{uri:"https://cdn.france-montagnes.com/sites/default/files/styles/facebook/public/header/sarenne_laurent-salino-29.jpg?itok=CWxRhmj1"}}/>
<ImagesText>{item.Nom}</ImagesText>
</ImageView>
<CommentTextView>
<CommentText>{item.Commentaire}</CommentText>
<CommentDate>{item.Date}</CommentDate>
</CommentTextView>
<Line />
</CommentView>
)}
</KeyboardAvoidingView>
</AproposView>
);}
const AvisButton = styled.TouchableOpacity`
height:40px;
width:160px;
border-radius:30px;
align-items:center;
justify-content:center;
border:solid 2px black;
margin-top:10px;
`
const AvisButtonText = styled.Text`
font-size:16px;
text-align:center;
justify-content:center;
font-size:20px;
`
const Input = styled.TextInput`
height: 40px;
border-width: 1px;
width:300px;
border-radius:20px;
padding: 10px;
font-size:16px;
margin-top:10px
`
const SubmitButton = styled.TouchableOpacity`
height: 40px;
border-width: 1px;
width:200px;
border-radius:20px;
border:solid 2px black;
align-item:center;
justify-content:center;
margin-top:10px;
`

const MessageInput = styled.TextInput`
height: 80px;
border-width: 1px;
width:300px;
border-radius:20px;
padding: 10px;
font-size:16px;
margin-top:10px
`
const Line = styled.View`
border-bottom-color:#9C9CA2;
border-bottom-width:1px;
width:350px;
margin-top:20px;
`
const Avis=styled.Text`
font-size:25px;
font-weight:600;
padding-top:20px;
`
const AproposView=styled.View`
padding-left:20px;
`
const Images = styled.Image`
height:50px;
width:50px;
border-radius:40px
`
const CommentView = styled.View`
margin-top:20px;`

const ImageView = styled.View`
flex-direction:row;
align-items:center
`
const ImagesText = styled.Text`
font-size:18px;
font-weight:600;
padding-left:10px;
`
const CommentTextView = styled.View`
width:350px`

const CommentText = styled.Text`
font-size:18px;
font-weight:400;
padding-left:10px;
`
const CommentDate = styled.Text`
font-size:14px;
font-weight:200;
padding-left:10px;
padding-top:10px
`

 
export default AvisDetails;