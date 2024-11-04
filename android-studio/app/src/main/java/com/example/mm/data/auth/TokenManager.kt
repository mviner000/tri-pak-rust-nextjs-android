package com.example.mm.data.auth

import android.content.Context
import android.content.SharedPreferences

class TokenManager(context: Context) {
    private val prefs: SharedPreferences = context.getSharedPreferences("auth_prefs", Context.MODE_PRIVATE)

    companion object {
        const val KEY_ACCESS_TOKEN = "access_token"
        const val KEY_EXPIRY_TIME = "expiry_time"
    }

    fun saveToken(token: String, expiresIn: Int) {
        val expiryTime = System.currentTimeMillis() + (expiresIn * 1000L)
        prefs.edit()
            .putString(KEY_ACCESS_TOKEN, token)
            .putLong(KEY_EXPIRY_TIME, expiryTime)
            .apply()
    }

    fun getToken(): String? = prefs.getString(KEY_ACCESS_TOKEN, null)

    fun isTokenValid(): Boolean {
        val token = getToken()
        val expiryTime = prefs.getLong(KEY_EXPIRY_TIME, 0)
        return token != null && System.currentTimeMillis() < expiryTime
    }

    fun clearToken() {
        prefs.edit().clear().apply()
    }
}