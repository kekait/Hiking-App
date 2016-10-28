package com.example.shane.switchback;

import android.graphics.Color;
import android.support.v4.app.FragmentActivity;
import android.os.Bundle;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;
import com.google.android.gms.maps.model.PolylineOptions;

public class MapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        // Add a marker in Arcata and move the camera
        LatLng klopp_lake = new LatLng(40.855471, -124.095198);
        //Sets marker on klopp lake
        mMap.addMarker(new MarkerOptions().position(klopp_lake).title("Route 1"));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(klopp_lake, 16));
        //Sets map as hybrid
        mMap.setMapType(GoogleMap.MAP_TYPE_HYBRID);

        //polylines
        mMap.addPolyline(new PolylineOptions().add
                (new LatLng(40.855301, -124.098272),
                        new LatLng(40.853706, -124.093728),
                        new LatLng(40.855408, -124.091768),
                        new LatLng(40.857283, -124.096134),
                        new LatLng(40.855301, -124.098272)
                )
                .width(10)
                .color(Color.RED)
        );
    }
}
