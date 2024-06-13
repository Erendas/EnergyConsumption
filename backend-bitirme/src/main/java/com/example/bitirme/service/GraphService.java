package com.example.bitirme.service;

import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JFrame;
import javax.swing.JLabel;


@Service
public class GraphService {

	 public static void main(String[] args) {
	        String query = "SELECT d.id, d.day, m.month, y.year, d.graph_data " +
	                       "FROM day_table d " +
	                       "JOIN month_table m ON d.month_id = m.id " +
	                       "JOIN year_table y ON d.year_id = y.id";
	        
	        try (Connection conn = getConnection();
	             PreparedStatement pstmt = conn.prepareStatement(query);
	             ResultSet rs = pstmt.executeQuery()) {
	             
	            while (rs.next()) {
	                int id = rs.getInt("id");
	                int day = rs.getInt("day");
	                String month = rs.getString("month");
	                int year = rs.getInt("year");
	                byte[] imgBytes = rs.getBytes("graph_data");

	                BufferedImage img = ImageIO.read(new ByteArrayInputStream(imgBytes));
	                displayImage(img, id, day, month, year);
	            }
	        } catch (SQLException | IOException e) {
	            e.printStackTrace();
	        }
	    }
	    
	    private static Connection getConnection() throws SQLException {
	        String url = "jdbc:postgresql://localhost:5432/Bitirme";
	        String user = "postgres";
	        String password = "167943";
	        return DriverManager.getConnection(url, user, password);
	    }
	    
	    private static void displayImage(BufferedImage img, int id, int day, String month, int year) {
	        JFrame frame = new JFrame("Graph for " + day + " " + month + " " + year);
	        frame.setSize(800, 600);
	        JLabel label = new JLabel(new ImageIcon(img));
	        frame.add(label);
	        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	        frame.setVisible(true);
	    }
}