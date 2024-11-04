package com.example.mm.data.repository

import com.example.mm.data.api.AuthApi  // Make sure this import is correct
import com.example.mm.data.model.LoginRequest
import com.example.mm.data.model.LoginResponse
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

class AuthRepository {  // Remove the generic type parameter
    private val api: AuthApi

    init {
        val retrofit = Retrofit.Builder()
            .baseUrl("http://192.168.100.7:8080/")
            .addConverterFactory(GsonConverterFactory.create())
            .build()
        api = retrofit.create(AuthApi::class.java)
    }

    suspend fun login(username: String, password: String): Result<LoginResponse> {
        return try {
            val response = api.login(LoginRequest(username, password))
            if (response.isSuccessful) {
                Result.success(response.body()!!)
            } else {
                Result.failure(Exception("Login failed: ${response.code()}"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}