import { X } from 'phosphor-react'
import React, { Fragment } from 'react'
import { ComponentProps } from '../@types/generic'
import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastContent,
  ToastViewport,
  ToastClose,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {
  title: string
  description: string
}

const Toast: React.FC<ToastProps> = ({ title, description, ...rest }) => (
  <Fragment>
    <ToastRoot {...rest}>
      <ToastTitle>{title}</ToastTitle>
      <ToastContent>{description}</ToastContent>
      <ToastClose aria-label="Close" asChild>
        <X fontWeight="bold" />
      </ToastClose>
    </ToastRoot>
    <ToastViewport />
  </Fragment>
)

Toast.displayName = 'Toast'
ToastProvider.displayName = 'ToastProvider'

export { Toast, ToastProvider }
