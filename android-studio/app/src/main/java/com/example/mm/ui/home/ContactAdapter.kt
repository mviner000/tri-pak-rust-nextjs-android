package com.example.mm.ui.home

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import com.example.mm.R
import com.google.android.material.button.MaterialButton
import com.google.android.material.imageview.ShapeableImageView

class ContactAdapter(
    private val contacts: List<Contact>,
    private val onCallClick: (Contact) -> Unit
) : RecyclerView.Adapter<ContactAdapter.ContactViewHolder>() {

    class ContactViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val imageAvatar: ShapeableImageView = view.findViewById(R.id.imageAvatar)
        val textName: TextView = view.findViewById(R.id.textName)
        val statusIndicator: View = view.findViewById(R.id.statusIndicator)
        val buttonCall: MaterialButton = view.findViewById(R.id.buttonCall)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ContactViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_contact, parent, false)
        return ContactViewHolder(view)
    }

    override fun onBindViewHolder(holder: ContactViewHolder, position: Int) {
        val contact = contacts[position]
        holder.imageAvatar.setImageResource(contact.avatarResId)
        holder.textName.text = contact.name
        holder.statusIndicator.setBackgroundColor(
            if (contact.isActive)
                ContextCompat.getColor(holder.itemView.context, android.R.color.holo_green_light)
            else
                ContextCompat.getColor(holder.itemView.context, android.R.color.darker_gray)
        )
        holder.buttonCall.setOnClickListener { onCallClick(contact) }
    }

    override fun getItemCount() = contacts.size
}