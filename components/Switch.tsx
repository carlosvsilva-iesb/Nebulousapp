import React, { useState } from 'react';
import { View, Text, Switch} from 'react-native';

export function AceitarTermos() {
    const [aceitaTermos, setAceitaTermos] = useState(false);

    return (
        <View>
            <Switch 
                value={aceitaTermos} 
                onValueChange={setAceitaTermos} 
            />
            <Text >
                {aceitaTermos ? 'Termos aceitos' : 'Termos não aceitos'}
            </Text>
        </View>
    );
}