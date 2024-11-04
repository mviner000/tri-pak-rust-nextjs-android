package com.example.mm.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.mm.R
import com.example.mm.databinding.FragmentHomeBinding

class HomeFragment : Fragment() {

    private var _binding: FragmentHomeBinding? = null
    private val binding get() = _binding!!

    private val contacts = listOf(
        Contact("Florence Nogoy", R.drawable.florence),
        Contact("Marko Angelo Nogoy", R.drawable.marko),
        Contact("Melvin Nogoy", R.drawable.melvin),
        Contact("Ma. Layka Nogoy", R.drawable.layka),
        Contact("Marymel Nogoy", R.drawable.marymel),
        Contact("Ma. Angela Nogoy", R.drawable.angela)
    )

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentHomeBinding.inflate(inflater, container, false)
        val root: View = binding.root

        setupRecyclerView()

        return root
    }

    private fun setupRecyclerView() {
        binding.recyclerContacts.apply {
            layoutManager = LinearLayoutManager(context)
            adapter = ContactAdapter(contacts) { contact ->
                // Placeholder for call action
                Toast.makeText(context, "Calling ${contact.name}...", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}