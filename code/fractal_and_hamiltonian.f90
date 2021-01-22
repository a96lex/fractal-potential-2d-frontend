subroutine sierpinsky_hamiltonian(r,l,n,H)
    implicit none
    integer :: r,l,n
    double precision :: x_max,dx
    double precision, intent(out) :: H(n,n)
    integer ::V(l,l) 
    common/props/dx

    ! Parameters
    x_max=1
    dx=2*x_max/dble(l-1)

    call generate_v(r,l,V)
    call generate_H(l,n,v,H)

end subroutine sierpinsky_hamiltonian

subroutine generate_v(r,l,v)
    implicit none
    integer :: r,k,n,m,x,y,l,c
    integer, intent(out) :: v(l,l)

    c=0
    v=0
    !constructing the V matrix
    do k=1,r
        do x=1,l
            do n=1,3**(k-1)
                do m=1,3**(k-1)
                    c=c+l
                    if (x.gt.((n-1)*l/3**(k-1)+l/3**k).and.x.le.((n-1)*l/3**(k-1)+2*l/3**k)) then
                        do y=1,l
                            if (y.gt.((m-1)*l/3**(k-1)+l/3**k).and.y.le.((m-1)*l/3**(k-1)+2*l/3**k)) v(x,y)=1
                        enddo
                    endif
                enddo
            enddo
        enddo
    enddo
    
    
    print*,c,"comparisons"

end subroutine generate_v


subroutine generate_H(l,n,v,H)
    implicit none
    integer :: l,n, v(l,l),i,j,v_vector(n)
    double precision :: H(n,n),dx
    common/props/dx

    do i=1,l
        do j=1,l
            v_vector((i-1)*l+j)=v(i,j)
        enddo
    enddo
    
    H=0

    v_vector=1-v_vector
    do j=1,n
        if (v_vector(j).ne.0) then
            do i=1,n
                if (i.eq.j) H(j,i)=4/dx**2
                if (i.eq.j+1.and.mod(i-1,l).ne.0.and.v_vector(j+1).ne.0) H(j,i)=-1/dx**2
                if (i.eq.j-1.and.mod(j-1,l).ne.0.and.v_vector(j-1).ne.0) H(j,i)=-1/dx**2
                if (i.eq.j+l.and.v_vector(j+l).ne.0) H(j,i)=-1/dx**2
                if (i.eq.j-l.and.v_vector(j-l).ne.0) H(j,i)=-1/dx**2
            enddo
        endif
    enddo



end subroutine generate_H
