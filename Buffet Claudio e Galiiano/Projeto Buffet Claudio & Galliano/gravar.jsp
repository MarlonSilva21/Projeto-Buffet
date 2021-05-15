<%@page language="java" import="java.sql.*" %>

<%
        String vnome = request.getParameter("txtnome") ;
        String vemail = request.getParameter("txtemail") ;
        String vmensagem = request.getParameter("txtmensagem") ;

        String banco    = "claudio&galliano" ;
        String usuario  = "root" ;
        String senha    = "" ;
        String endereco = "jdbc:mysql://localhost:3306/" + banco  ;

        String driver   = "com.mysql.jdbc.Driver" ;
        Class.forName(driver) ;
        Connection conexao ;
        conexao = DriverManager.getConnection( endereco, usuario, senha ) ;

        Statement stm = conexao.createStatement() ;
        String sql = "insert into cadastro (nome,email,mensagem) values('"+ vnome +"' , '" + vemail + "' ,'" + vmensagem +"')";
        stm.executeUpdate( sql ) ;
        conexao.close() ;
	    stm.close() ;


        out.print("Mensagem enviada com sucesso!!!") ;
        out.print("<br/><br/>") ;
        out.print("<a href='index.html'>Voltar</a>") ;



%>