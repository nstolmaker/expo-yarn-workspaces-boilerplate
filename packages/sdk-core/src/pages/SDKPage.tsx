import { View, Text } from 'react-native'
import {APIComponent} from '@streem/api'

const SDKPage = () => {
    return (
        <View style={{borderColor: 'orange', borderWidth: 16, height: 210, width: 200}}>
            <Text>(SDK Page); APIComponent ⬇️</Text>
            <APIComponent />
        </View>);
}

export default SDKPage;