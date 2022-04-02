// import { useState } from 'react';
import Form from "./Form";

export default function Edit() {
    // const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    alert(data);
  };

//  if (isLoading) return <Form />;
  return (
    <Form onSubmit={onSubmit} defaultValues="test" />
  );
}