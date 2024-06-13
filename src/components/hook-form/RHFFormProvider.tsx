import PropTypes, { InferProps } from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------
RHFFormProvider.propTypes = {
    children: PropTypes.node.isRequired,
    methods: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
};

export default function RHFFormProvider({ children, onSubmit, methods } : InferProps<typeof RHFFormProvider.propTypes>) {
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        <Form {...methods}>

            <form
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                onSubmit={onSubmit}
            >{children}</form>
        </Form>
    );
}


