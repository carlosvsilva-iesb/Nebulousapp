import { estilos } from '@/components/estilos';
import { useState } from 'react';
import { TextInput } from 'react-native';

type CampoNomeProps = {
  value: string;
  onChangeText: (texto: string) => void;
};

export function CampoNome({ value, onChangeText }: CampoNomeProps) {
  const [campoAtivo, setCampoAtivo] = useState(false);

  function handleFocus() {
    setCampoAtivo(true);
  }

  function handleBlur() {
    setCampoAtivo(false);
  }

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Digite seu nome de usuário*"
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[estilos.formCampo, campoAtivo && estilos.campoAtivo]}
    />
  );
}