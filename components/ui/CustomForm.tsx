import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './form'
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up')
interface CustomFormProps {
    control: Control<z.infer<typeof formSchema>>
    name: FieldPath<z.infer<typeof formSchema>>  
    label: string
    placeholder: string
}

const CustomForm = ({control, name, label, placeholder}: CustomFormProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>
                        {label}
                    </FormLabel>
                    <div className=' flex w-full flex-col'>
                        <FormControl>
                            <Input 
                                placeholder={placeholder}
                                className='input-class'
                                type={name === 'password' ? 'password' : 'text'}
                                value={typeof field.value === 'string' || typeof field.value === 'number' ? field.value : ''}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                name={field.name}
                                ref={field.ref}
                            />
                        </FormControl>
                        <FormMessage className="form-message" />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomForm