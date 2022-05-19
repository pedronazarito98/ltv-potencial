import { api } from "./api";

export const sendRequest = {
  sendEmail: async (
    portalId: string | undefined,
    formGuid: string | undefined,
    body: any
  ) => {
    try {
      const response = await api.post(`${portalId}/${formGuid}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  },
};
