import { useFormContext } from "react-hook-form";
import { BaseInput, FormContainer } from "./styles";

export function AddressForm() {
    const { register } = useFormContext();

    return (
        <FormContainer>
            <BaseInput
                id="cep"
                type="text"
                placeholder="CEP"
                width="50%"
                {...register("cep")}
            ></BaseInput>
            <BaseInput
                id="street"
                type="text"
                placeholder="Rua"
                width="100%"
                {...register("street")}
            ></BaseInput>
            <div>
                <BaseInput
                    id="streetNumber"
                    type="text"
                    placeholder="Número"
                    width="auto"
                    {...register("streetNumber")}
                />
                <BaseInput
                    id="complement"
                    type="text"
                    placeholder="Complemento"
                    width="100%"
                    {...register("complement")}
                />
            </div>
            <div>
                <BaseInput
                    id="district"
                    type="text"
                    placeholder="Bairro"
                    width="40%"
                    {...register("district")}
                />
                <BaseInput
                    id="city"
                    type="text"
                    placeholder="Cidade"
                    width="40%"
                    {...register("city")}
                />
                <BaseInput
                    id="estate"
                    type="text"
                    placeholder="UF"
                    width="15%"
                    {...register("estate")}
                />
            </div>
        </FormContainer>
    );
}
