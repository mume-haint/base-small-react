// form
import {FormProvider as Form, UseFormReturn} from 'react-hook-form';
import {ReactNode} from "react";


interface RHFFormProviderProps {
  onSubmit?: () => void;
  methods: UseFormReturn;
  children?: ReactNode;
}

export default function RHFFormProvider({children, onSubmit, methods}: RHFFormProviderProps) {
  return (

    <Form {...methods}>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}


