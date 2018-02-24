/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package serlvet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author fightingfighting
 */
@WebServlet(name = "RetrieveFavouriteServlet", urlPatterns = {"/RetrieveFavouriteServlet/*"})
public class RetrieveFavouriteServlet extends HttpServlet {
  private static String query = "SELECT * FROM giphyangularca.giphy where username = ?";
    
    @Resource(lookup = "jdbc/sample")
    private DataSource ds;
   

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        PrintWriter out = response.getWriter();
    //    out.print("hello");
       JsonArrayBuilder gifphyBuilder = Json.createArrayBuilder();
        
        String username = request.getPathInfo().substring(1);
        
        try (Connection conn = ds.getConnection())
        {
            PreparedStatement ps = conn.prepareStatement(query);
            ps.setString(1, username);	
            ResultSet rs = ps.executeQuery();
            
            // show error page if not records from query
            if (!rs.isBeforeFirst()) 
            {
		response.setStatus(HttpServletResponse.SC_NOT_FOUND);
		return;
            }

            // construct json object
            while(rs.next())
            {
                JsonObjectBuilder obj = Json.createObjectBuilder();
                obj.add("giffyImage", rs.getString("url"))
                        .add("username", rs.getString("username"))
                        .add("description",rs.getString("description"));
                      
                gifphyBuilder.add(obj.build());
                 
            }
            rs.close();
            conn.close();
            // out.print("hello");
        } 
        catch (SQLException ex) 
        {
           //   out.print("error");
            log(ex.getMessage());
            ex.printStackTrace();
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            return;
        }
       
        // set status code
        response.setStatus(HttpServletResponse.SC_OK);
        
        // set media type
        response.setContentType(MediaType.APPLICATION_JSON);
        
        try (PrintWriter out1 = response.getWriter()) 
        {
           JsonArray datas = gifphyBuilder.build();
           out1.println(datas.toString());          

        }
    }

}
