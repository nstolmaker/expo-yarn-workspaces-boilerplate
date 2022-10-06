import { View, Text } from 'react-native'
import {APIComponent} from '@streem/api'

const SDKPage = () => {
    return (
        <View style={{borderColor: 'orange', borderWidth: 16, height: 100, width: 200}}>
            {/* <Text>NOAH API COMPONENT GOES HERE</Text> */}
            <APIComponent />
        </View>);
}

export default SDKPage;