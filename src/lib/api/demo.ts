import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shikkha-erp.onrender.com/api';

export interface DemoRequestPayload {
  school: {
    name: string;
    address: string;
    phone: string;
    email: string;
    type: string;
    numberOfStudents: number;
    numberOfTeachers: number;
  };
  superAdmin: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface DemoRequestResponse {
  success: boolean;
  message: string;
  requestId: string;
  email: string;
}

export async function submitDemoRequest(payload: DemoRequestPayload): Promise<DemoRequestResponse> {
  const response = await axios.post<DemoRequestResponse>(`${API_BASE_URL}/demo/request`, payload);
  return response.data;
}