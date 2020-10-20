import { useToast } from '@drvt/ui'
import * as clipboard from 'clipboard-polyfill'

export function useCopyToClipboard(payload, toastText) {
  const toast = useToast()
  return () => {
    clipboard.writeText(payload)
    toastText && toast(toastText)
  }
}
