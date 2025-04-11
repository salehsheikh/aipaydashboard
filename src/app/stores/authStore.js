
import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  username: "",
  password: "",
  user:null,
  email:"",
  otp: ["", "", "", "", "", ""],
  resetToken: '',
  showPassword: false,
  showConfirmPassword: false,
  newPassword: '',
  confirmPassword: '',
  successMessage: "",
  rememberMe: false,
  isLoading: false,
  error: null,
  
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setNewPassword:(newPassword)=> set({newPassword}),
  setConfirmPassword:(confirmPassword)=> set({confirmPassword}),
  setEmail:(email)=>set({email}),
  setResetToken: (token) => set({ resetToken: token }),
  setOtp:(index,value)=>
    set((state)=>{
        const newOtp=[...state.otp];
        newOtp[index]=value;
        return {otp:newOtp};
    }),
  toggleRememberMe: () => set((state) => ({ rememberMe: !state.rememberMe })),
  toggleShowPassword: () => set((state) => ({ showPassword: !state.showPassword })),
  toggleShowConfirmPassword:()=>set((state)=> ({showConfirmPassword:!state.showConfirmPassword})),

  signup: async (router) => {
    try {
      set({ isLoading: true, error: null, successMessage: "" });
      
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: get().username,
          email: get().email,
          password: get().password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      set({ 
        successMessage: data.message,
        password: "",
        username: "",
        email: ""
      });
      if (router) {
        router.push("/auth/otp");
      }

    } catch (error) {
      set({ error: error.message || "Registration failed" });
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (router) => {
    try {
      set({ isLoading: true, error: null ,successMessage: ""  });

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: get().username,
          password: get().password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login
      const data = await response.json();
    set({ 
      user: {
        ...data.user,
        image: data.user.image || '' 
      },
      error: null,
      isLoading: false 
    });
      console.log("Login successful:", data);

      // Redirect to home page
      if (router) {
        router.push("/");
      }
    } catch (error) {
      set({ error: error.message || "Login failed" });
    } finally {
      set({ isLoading: false });
    }
  },

  logout:()=>{
    set({ user: null });
  },

  forgetPassword:async(router)=>{
    try{
        set({ isLoading: true, error: null, successMessage: "" });
        const response = await fetch("/api/auth/forget-password", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: get().email }),
          });
          if (!response.ok) throw new Error("Failed to send OTP");
          set({ successMessage: "OTP sent successfully! Check your email." });
          if (router) {
            router.push("/auth/otp");
          }
        } catch (error) {
          set({ error: error.message || "Error sending OTP" });
        } finally {
          set({ isLoading: false });
        }
    },
    
    verifyOtp:async(router)=>{
        try {
            set({ isLoading: true, error: null, successMessage: "" });
            const response=await fetch("/api/auth/verify-otp",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    email: get().email,
                    otp:get().otp.join("")}),
            });
            const data=await response.json();
            if(!response.ok) throw new Error(data.message || "otp verification failed");
            set({ successMessage: "OTP Verified! Redirecting...", error: null, resetToken: data.resetToken });
            setTimeout(()=>{
                if(router) router.push(`/auth/new-password?token=${data.resetToken}`);
            },1500);

            
        } catch (error) {
            set({ error: error.message || "Invalid OTP" });
        }
        finally {
            set({ isLoading: false });
          }
    },
  
// Reset Password API Call
resetPassword: async (router) => {
    set({ loading: true, error: null, successMessage: '' });

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resetToken: get().resetToken,
          newPassword: get().newPassword,
          confirmPassword: get().confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Something went wrong');

      set({ successMessage: data.message, newPassword: '', confirmPassword: '' });
      setTimeout(() => {
          router.push('/auth/login') ;
      }, 2000);
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));
