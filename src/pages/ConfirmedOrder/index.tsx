import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  Atributes,
  AtributesText,
  ConfirmedOrderContainer,
  CurrencyIcon,
  ListAtributes,
  MapPinIcon,
  SubTitle,
  TextContainer,
  TimerIcon,
  Title,
} from "./styles";
import delivery from "../../assets/delivery.svg";
export function ConfirmedOrder() {
  return (
    <ConfirmedOrderContainer>
      <TextContainer>
        <Title>Uhu! Pedido confirmado</Title>

        <SubTitle>Agora é só aguardar logo o café chegará até você</SubTitle>

        <ListAtributes>
          <Atributes>
            <MapPinIcon>
              <MapPin size={24} weight="fill"></MapPin>
            </MapPinIcon>

            <AtributesText>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p> Farrapos - Porto Alegre, RS</p>
            </AtributesText>
          </Atributes>

          <Atributes>
            <TimerIcon>
              <Timer size={24} weight="fill" />
            </TimerIcon>

            <AtributesText>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </AtributesText>
          </Atributes>

          <Atributes>
            <CurrencyIcon>
              <CurrencyDollar size={24} weight="fill" />
            </CurrencyIcon>

            <AtributesText>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </AtributesText>
          </Atributes>
        </ListAtributes>
      </TextContainer>

      <img src={delivery} alt="" />
    </ConfirmedOrderContainer>
  );
}
