import { Container } from "./styles";
import { Input } from "../../components/Input";

const Register = () => {
  return (
    <Container>
      <Input id="name" value="name" label="Nome Completo" />
    </Container>
  );
};

export default Register;
