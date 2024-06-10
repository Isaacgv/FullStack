import { Container,  Links} from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section/styles';

import { Tag } from '../../components/Tag';

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links">
        <Links>
          <li><a href="#">https://</a></li>
          <li><a href="#">https://</a></li>
        </Links>
      </Section>

      <Section title="Tags">
          <Tag title="express"/>
          <Tag title="nodejs"/>

      </Section>
      <Button title="Return" loading/>
    </Container>
  )
}