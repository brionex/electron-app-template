import { IPCResponse } from '@shared/types/api.type.ts'

export const ping = ({
  message
}: {
  message: string
}): IPCResponse<{ message: string }> => {
  console.log('(Main):', message)
  return { ok: true, data: { message: 'Mensaje desde el main -> ping().' } }
}

export const asyncPing = async ({
  message
}: {
  message: string
}): Promise<IPCResponse<{ message: string }>> => {
  console.log('(Main): ', message)
  return {
    ok: true,
    data: { message: 'Mensaje desde el main -> asyncPing().' }
  }
}

export const logPlatform = () => {
  console.log('(Main):', process.platform)
}
