import { FC } from 'react'
import { Formik } from 'formik'

import { JSON_SCHEMA_URL } from 'utils'
import { useAuthContext } from 'hooks/useAuthContext'
import { Container, Header, Input, Spinner } from 'components'

import { initialValues, useCredentialForm } from './useCredentialForm'
import * as S from './CredentialForm.styled'

const CredentialForm: FC = () => {
  const { authState } = useAuthContext()
  const { handleSubmit, validate, isCreating } = useCredentialForm()

  if (!authState.authorizedAsIssuer) {
    return <Spinner />
  }

  return (
    <>
      <Header title='Enter details' />

      <Container>
        <div className='grid lg:grid-cols-12'>
          <div className='lg:col-span-8 lg:col-start-3'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validate={validate}
            >
              {(formikProps) => (
                <form id='form' onSubmit={formikProps.handleSubmit}>
                  <S.Title variant='p1'>
                    Please fill in the form below to issue a certificate.
                  </S.Title>

                  <Input label='Schema URL' value={JSON_SCHEMA_URL} disabled />

                  <S.Heading variant='h6'>Certificate details</S.Heading>

                  <div className='grid lg:grid-cols-2 lg:gap-x-8'>
                    <S.InputWrapper
                      label='Course title'
                      placeholder='Enter course title'
                      name='courseTitle'
                      maxLength={100}
                      value={formikProps.values.eventName}
                      onChange={(_, event) => formikProps.handleChange(event)}
                      hasError={
                        formikProps.touched.eventName
                          ? Boolean(formikProps.errors.eventName)
                          : false
                      }
                      helpText={
                        formikProps.touched.eventName
                          ? formikProps.errors.eventName
                          : ''
                      }
                      onBlur={formikProps.handleBlur}
                    />
                    <S.InputWrapper
                      label='Issuing institution'
                      placeholder='Issuing institution'
                      name='issuingInstitution'
                      maxLength={500}
                      value={formikProps.values.eventLocation}
                      onChange={(_, event) => formikProps.handleChange(event)}
                      hasError={
                        formikProps.touched.eventLocation
                          ? Boolean(formikProps.errors.eventLocation)
                          : false
                      }
                      helpText={
                        formikProps.touched.eventLocation
                          ? formikProps.errors.eventLocation
                          : ''
                      }
                      onBlur={formikProps.handleBlur}
                    />
                    <S.InputWrapper
                      label='Date of completion'
                      name='DateOfCompletion'
                      type='date'
                      value={formikProps.values.eventStartDateTime}
                      onChange={(_, event) => formikProps.handleChange(event)}
                      hasError={
                        formikProps.touched.eventStartDateTime
                          ? Boolean(formikProps.errors.eventStartDateTime)
                          : false
                      }
                      helpText={
                        formikProps.touched.eventStartDateTime
                          ? formikProps.errors.eventStartDateTime
                          : ''
                      }
                      onBlur={formikProps.handleBlur}
                    />
                  </div>

                  <S.Heading variant='h6'>Student information</S.Heading>

                  <div className='grid lg:grid-cols-2 lg:gap-x-8'>
                    <S.InputWrapper
                      label='Student name'
                      name='name'
                      maxLength={100}
                      placeholder='Enter Student name'
                      value={formikProps.values.name}
                      onChange={(_, event) => formikProps.handleChange(event)}
                      hasError={
                        formikProps.touched.name
                          ? Boolean(formikProps.errors.name)
                          : false
                      }
                      helpText={
                        formikProps.touched.name ? formikProps.errors.name : ''
                      }
                      onBlur={formikProps.handleBlur}
                    />
                    <S.InputWrapper
                      label='Student email'
                      name='email'
                      type='email'
                      placeholder='Enter student email'
                      maxLength={100}
                      value={formikProps.values.email}
                      onChange={(_, event) => formikProps.handleChange(event)}
                      hasError={
                        formikProps.touched.email
                          ? Boolean(formikProps.errors.email)
                          : false
                      }
                      helpText={
                        formikProps.touched.email
                          ? formikProps.errors.email
                          : ''
                      }
                      onBlur={formikProps.handleBlur}
                    />
                  </div>

                  <S.ButtonWrapper
                    type='submit'
                    form='form'
                    disabled={!(formikProps.isValid && formikProps.dirty)}
                    loading={isCreating}
                  >
                    Issue certificate
                  </S.ButtonWrapper>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CredentialForm
