package com.example.mm.ui.home

data class Contact(
    val name: String,
    val avatarResId: Int,
    var isActive: Boolean = false
)