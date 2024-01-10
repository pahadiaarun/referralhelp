import React, { useState } from 'react';
import {
  AppContainer,
  Heading,
  FormContainer,
  FormLabel,
  StyledSelect,
  StyledInput,
  CopyButton,
} from './styles';

function App() {
  const [salutation, setSalutation] = useState('Sir');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [jobLink, setJobLink] = useState(
    ''
  );
  const [resumeLink, setResumeLink] = useState(
    'https://drive.google.com/file/d/1KAr0AyG40YwNQiR0UPvv8tEv8kaErjwk/view?usp=drive_link'
  );
  const [name, setName] = useState('Arun Kumar Pahadia');

  const salutationOptions = ['Sir', 'Mam'];

  const handleCopy = () => {
    const updatedMessage = `Hi ${salutation},

I came across the ${position} opportunity at ${company} and am interested in applying. Would you be open to referring me to the role?

For additional context, here is the job link along with my resume:

${jobLink}

${resumeLink}

Happy to chat more if you have the time. Looking forward to hearing from you.

${name}`;
    navigator.clipboard.writeText(updatedMessage);
  };

  return (
    <AppContainer>
      <Heading>Message Updater</Heading>
      <FormContainer>
        <FormLabel>Salutation:</FormLabel>
        <StyledSelect
          value={salutation}
          onChange={(e) => setSalutation(e.target.value)}
        >
          {salutationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </StyledSelect>
      </FormContainer>
      <FormContainer>
        <FormLabel>Position:</FormLabel>
        <StyledInput
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Company:</FormLabel>
        <StyledInput
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Job Link:</FormLabel>
        <StyledInput
          type="text"
          value={jobLink}
          onChange={(e) => setJobLink(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Resume Link:</FormLabel>
        <StyledInput
          type="text"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
        />
      </FormContainer>
      <FormContainer>
        <FormLabel>Your Name:</FormLabel>
        <StyledInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormContainer>
      <CopyButton onClick={handleCopy}>Copy Message</CopyButton>
    </AppContainer>
  );
}

export default App;
