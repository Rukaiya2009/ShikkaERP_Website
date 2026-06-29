import axios from 'axios';

// ✅ FIXED: API_BASE_URL already includes /api
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
  try {
    console.log('📤 Sending demo request payload:', JSON.stringify(payload, null, 2));
    // ✅ FIXED: Changed from /demo/request to /api/demo/request
    const response = await axios.post<DemoRequestResponse>(`${API_BASE_URL}/demo/request`, payload);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error('❌ Backend error response:', error.response.data);
      console.error('❌ Status:', error.response.status);
      console.error('❌ Headers:', error.response.headers);
      throw new Error(error.response.data?.message || `Request failed with status ${error.response.status}`);
    }
    throw error;
  }
}