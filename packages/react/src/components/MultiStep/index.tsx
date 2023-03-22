import React from 'react'
import { ComponentProps } from '../@types/generic'
import {
  MultiStepBar,
  MultiStepContainer,
  MultiStepLabel,
  Step,
} from './styles'

export interface MultiStepProps extends ComponentProps<any> {
  steps: number
  currentStep?: number
}

export const MultiStep: React.FC<MultiStepProps> = ({
  steps,
  currentStep = 1,
}) => (
  <MultiStepContainer>
    <MultiStepLabel>
      Passo {currentStep} de {steps}
    </MultiStepLabel>

    <MultiStepBar css={{ '--steps-size': steps }}>
      {Array.from({ length: steps }, (_, index) => index + 1).map((step) => (
        <Step key={step} active={currentStep >= step} />
      ))}
    </MultiStepBar>
  </MultiStepContainer>
)
