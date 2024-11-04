package com.example.mm.ui.gallery

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.GridLayoutManager
import com.example.mm.R
import com.example.mm.databinding.FragmentGalleryBinding

class GalleryFragment : Fragment() {

    private var _binding: FragmentGalleryBinding? = null
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentGalleryBinding.inflate(inflater, container, false)
        val root: View = binding.root

        // List of your image resources
        val images = listOf(
            R.drawable.pic1,  // Replace these with your actual image names
            R.drawable.pic2,
            R.drawable.pic3
            // Add more images as needed
        )

        // Set up RecyclerView
        binding.recyclerGallery.apply {
            layoutManager = GridLayoutManager(context, 2)  // 2 columns
            adapter = GalleryAdapter(images)
        }

        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}