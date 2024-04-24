/* eslint-disable @typescript-eslint/no-explicit-any */
// src/context/members/actions.ts
import { API_ENDPOINT } from '../../config/constants';

export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") || "";
  // feteching the members
  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.error('Error fetching Members:', error);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: 'Unable to load members' });
  }
};

export const addMember = async (dispatch: any, args: any) => {

  // creating the user or adding the user
  try {
    const token = localStorage.getItem("authToken") || "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      body: JSON.stringify(args), 
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    const data = await response.json();

    if (data.errors && data.errors.length > 0) {
      throw new Error(data.errors[0].message);
    }

    dispatch({ type: 'ADD_MEMBER_SUCCESS', payload: data.user });
    console.log("user created")
    return { ok: true };
  } catch (error) {
    console.error('Add member operation failed:', error);
    throw error;
  }
};

export const deleteMember = async (dispatch: any, id: number) => {
  const token = localStorage.getItem("authToken") || "";
  // deleling the userr
  try {
    dispatch({ type: "DELETE_USER_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Failed to Remove the user");
    }

      // And if everything goes well with the API call, we will dispatch an action, 
      // with `type` set to `ADD_PROJECT_SUCCESS` and in `payload` we will send the 
      // new project `data`

    dispatch({ type: "DELETE_MEMBER_SUCCESS", payload: id });
    return { ok: true };
        // Dialogue 5: And for error I'll return status called "ok", with value `false`.

  } catch (error) {
    console.error("Delete member operation failed:", error);
    throw error;
  }
};