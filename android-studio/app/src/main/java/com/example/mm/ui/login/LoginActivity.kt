package com.example.mm.ui.login

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Toast
import android.widget.ProgressBar
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.button.MaterialButton
import com.google.android.material.textfield.TextInputEditText
import com.example.mm.MainActivity
import com.example.mm.R
import com.example.mm.data.auth.TokenManager
import com.example.mm.data.model.LoginResponse

class LoginActivity : AppCompatActivity() {
    private val viewModel: LoginViewModel by viewModels()
    private lateinit var tokenManager: TokenManager

    private lateinit var usernameEditText: TextInputEditText
    private lateinit var passwordEditText: TextInputEditText
    private lateinit var loginButton: MaterialButton
    private lateinit var progressBar: ProgressBar

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        // Initialize TokenManager
        tokenManager = TokenManager(this)

        // Check if user is already logged in
        if (tokenManager.isTokenValid()) {
            startMainActivity()
            return
        }

        initializeViews()
        setupListeners()
        observeViewModel()
    }

    private fun initializeViews() {
        usernameEditText = findViewById(R.id.usernameEditText)
        passwordEditText = findViewById(R.id.passwordEditText)
        loginButton = findViewById(R.id.loginButton)
        progressBar = findViewById(R.id.progressBar)
    }

    private fun setupListeners() {
        loginButton.setOnClickListener {
            val username = usernameEditText.text.toString()
            val password = passwordEditText.text.toString()

            if (validateInput(username, password)) {
                showLoading(true)
                viewModel.login(username, password)
            }
        }
    }

    private fun observeViewModel() {
        viewModel.loginResult.observe(this) { result ->
            showLoading(false)
            result.fold(
                onSuccess = { response ->
                    handleSuccessfulLogin(response)
                },
                onFailure = { exception ->
                    handleFailedLogin(exception)
                }
            )
        }
    }

    private fun validateInput(username: String, password: String): Boolean {
        return when {
            username.isBlank() -> {
                usernameEditText.error = "Username cannot be empty"
                false
            }
            password.isBlank() -> {
                passwordEditText.error = "Password cannot be empty"
                false
            }
            else -> true
        }
    }

    private fun handleSuccessfulLogin(response: LoginResponse) {
        // Save token using TokenManager
        tokenManager.saveToken(response.access_token, response.expires_in)
        startMainActivity()
    }

    private fun handleFailedLogin(exception: Throwable) {
        Toast.makeText(
            this,
            "Login failed: ${exception.message}",
            Toast.LENGTH_LONG
        ).show()
    }

    private fun startMainActivity() {
        val intent = Intent(this, MainActivity::class.java)
        // Clear the back stack so user can't go back to login screen
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        startActivity(intent)
        finish()
    }

    private fun showLoading(show: Boolean) {
        progressBar.visibility = if (show) View.VISIBLE else View.GONE
        loginButton.isEnabled = !show
        usernameEditText.isEnabled = !show
        passwordEditText.isEnabled = !show
    }
}